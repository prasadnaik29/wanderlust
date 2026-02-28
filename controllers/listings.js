const Listing = require("../models/listing.js");
const { cloudinary } = require("../cloudConfig");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("new");
};

module.exports.showListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  // 🔴 IMPORTANT:
  // If listing is not found, we redirect.
  // We MUST use "return" here.
  // Otherwise, the code below (res.render) will still run,
  // causing "Cannot set headers after they are sent" error.

  if (!listing) {
    req.flash("error", "Listing does not exsit!");
    return res.redirect("/listings");
  }
  res.render("show", { listing });
};

module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing({
    ...req.body.listing,
    image: {
      filename: filename,
      url: url,
    },
    owner: req.user._id,
  });
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exsit!");
    return res.redirect("/listings");
  }
  let ogImageUrl = listing.image.url;
  previewUrl = ogImageUrl.replace("/upload", "/upload/w_100")
  res.render("edit", { listing, previewUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { runValidators: true },
  );

  if (req.file) {
    let listing = await Listing.findById(id);

    await cloudinary.uploader.destroy(listing.image.filename);

    let url = req.file.path;
    let filename = req.file.filename;

    listing.image = { filename, url };
    await listing.save();
  }

  req.flash("success", "Listing edited!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
