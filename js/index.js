jQuery(document).ready(function () {
  jQuery(".gallery").nanogallery2({
    items: [
      { src: "/20240124_203538.jpg", srct: "/20240124_203538.jpg", title: "Karolina i Robert" },
      { src: "/20240124_203540.jpg", srct: "/20240124_203540.jpg", title: "Karolina i Robert" },
      { src: "/20240124_203543.jpg", srct: "/20240124_203543.jpg", title: "Karolina i Robert" },

      { src: "/20240124_203546.jpg", srct: "/20240124_203546.jpg", title: "Karolina i Robert" },
      { src: "/20240124_203601.jpg", srct: "/20240124_203601.jpg", title: "Karolina i Robert" },
      { src: "/20240125_004534.jpg", srct: "/20240125_004534.jpg", title: "Grażynka i Roman" },

      { src: "/20240125_004539.jpg", srct: "/20240125_004539.jpg", title: "Grażynka, Robert i Roman" },
      { src: "/20240125_004550.jpg", srct: "/20240125_004550.jpg", title: "Robert i Roman" },
      { src: "/20240125_004552.jpg", srct: "/20240125_004552.jpg", title: "Robert i Roman" },

      { src: "/20240125_004607.jpg", srct: "/20240125_004607.jpg", title: "Grażynka, Kacper i Roman" },
      { src: "/20240125_004642.jpg", srct: "/20240125_004642.jpg", title: "Kasia i Roman" },
      { src: "/20240125_004714.jpg", srct: "/20240125_004714.jpg", title: "Pisarscy" },

      { src: "/20240125_020550.jpg", srct: "/20240125_020550.jpg", title: "Kasia i Kacper" },
      { src: "/20240125_023645.jpg", srct: "/20240125_023645.jpg", title: "Marzena, Kasia i Roman" },
    ],
    thumbnailWidth: "auto",
    thumbnailHeight: 300,
    itemsBaseURL: "/photos",
    galleryDisplayMode: 'fullContent',
    galleryPaginationMode: 'dots',
    galleryL1MaxRows: 2, 
    gallerySorting: 'random',
    thumbnailAlignment: 'justified',
          thumbnailL1GutterWidth: 30,
          thumbnailL1GutterHeight: 30,
          thumbnailBorderHorizontal: 3,
          thumbnailBorderVertical: 3,

          // THUMBNAIL TOOLS & LABEL
          thumbnailL1Label: { display: true, position:'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left'},
          thumbnailToolbarImage :  { topLeft: 'select', bottomRight : 'featured,display,download,info,cart' },

          // DISPLAY ANIMATION
          thumbnailDisplayTransition: 'slideDown2',       // thumbnail display animation
          thumbnailDisplayTransitionDuration: 3000,
          thumbnailDisplayInterval: 200,
          

          // THUMBNAIL'S HOVER ANIMATION
          thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown|scale120',
          touchAnimation: true,
          touchAutoOpenDelay: 0,

          // GALLERY THEME
          galleryTheme : { 
            thumbnail: { titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#000',background: '#000', },
            navigationPagination :  { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
    },
          //Lightbox general settings
          imageTransition: 'sslideAppear',
          slideshowDelay: 3000,
          
          // DEEP LINKING
          locationHash: false

  });
});
