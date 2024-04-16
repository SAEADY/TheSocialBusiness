$(function() {
  $(".menu-link").click(function(e) {
      e.preventDefault();

      $(".menu-overlay").toggleClass("open");
      $(".menu").toggleClass("open");
  });

  // Mouse movement tracking for the eyeball
  $(document).on("mousemove", function(event) {
      const x = event.clientX * 100 / window.innerWidth + "%";
      const y = event.clientY * 100 / window.innerHeight + "%";

      $(".ball").css({
          left: x,
          top: y,
          transform: "translate(-"+x+", -"+y+")"
      });
  });
});