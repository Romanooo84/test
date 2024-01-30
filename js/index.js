jQuery(document).ready(function () {
  jQuery("#my_nanogallery2").nanogallery2({
    items: [
      { src: "/20240124_203538.jpg", srct: "/20240124_203538.jpg", title: "Karolina i Robert" },
      { src: "/20240124_203540.jpg", srct: "/20240124_203540.jpg", title: "Karolina i Robert" },
      { src: "/20240124_203543.jpg", srct: "/20240124_203543.jpg", title: "Karolina i Robert" }
    ],
    thumbnailWidth: "auto",
    thumbnailHeight: 100,
    itemsBaseURL: "/photos",

    locationHash: false
  });
});
