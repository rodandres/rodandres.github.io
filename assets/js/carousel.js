document.addEventListener("DOMContentLoaded", () => {

    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {

        const track =
            carousel.querySelector(".carousel-track");

        const slides = Array.from(
            carousel.querySelectorAll(".carousel-slide")
        );

        const previousButton =
            carousel.querySelector(".carousel-prev");

        const nextButton =
            carousel.querySelector(".carousel-next");

        const dotsContainer =
            carousel.querySelector(".carousel-dots");

        if (slides.length <= 1) {
            return;
        }

        let currentIndex = 0;
        let autoplayTimer = null;
        let isHovered = false;


        /* =================================================
           CREATE DOTS
           ================================================= */

        slides.forEach((slide, index) => {

            const dot =
                document.createElement("button");

            dot.classList.add("carousel-dot");

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );

            dot.addEventListener("click", () => {

                goToSlide(
                    index,
                    true
                );

            });

            dotsContainer.appendChild(dot);
        });


        const dots =
            dotsContainer.querySelectorAll(
                ".carousel-dot"
            );


        /* =================================================
           STOP ALL VIDEOS
           ================================================= */

        function stopAllVideos() {

            slides.forEach((slide) => {

                const video =
                    slide.querySelector("video");

                if (!video) {
                    return;
                }

                video.pause();

                video.currentTime = 0;

                video.onended = null;
            });
        }


        /* =================================================
           GET CURRENT VIDEO
           ================================================= */

        function getCurrentVideo() {

            return slides[currentIndex]
                .querySelector("video");
        }


        /* =================================================
           CLEAR AUTOPLAY
           ================================================= */

        function clearAutoplay() {

            if (autoplayTimer !== null) {

                clearTimeout(autoplayTimer);

                autoplayTimer = null;
            }
        }


        /* =================================================
           UPDATE CAROUSEL HEIGHT
           ================================================= */

        function updateCarouselHeight() {

            const currentSlide =
                slides[currentIndex];

            if (!currentSlide) {
                return;
            }

            const media =
                currentSlide.querySelector(
                    "img, video"
                );

            if (!media) {
                return;
            }


            /*
             * IMAGE
             */

            if (media.tagName === "IMG") {

                if (!media.complete) {

                    media.addEventListener(
                        "load",
                        updateCarouselHeight,
                        { once: true }
                    );

                    return;
                }
            }


            /*
             * VIDEO
             */

            if (media.tagName === "VIDEO") {

                if (
                    !media.videoWidth ||
                    !media.videoHeight
                ) {

                    media.addEventListener(
                        "loadedmetadata",
                        updateCarouselHeight,
                        { once: true }
                    );

                    return;
                }
            }


            /*
             * Measure the active slide
             */

            requestAnimationFrame(() => {

                const height =
                    currentSlide.offsetHeight;

                if (height > 0) {

                    carousel.style.height =
                        `${height}px`;
                }

            });
        }


        /* =================================================
           SCHEDULE NEXT SLIDE
           ================================================= */

        function scheduleNextSlide() {

            clearAutoplay();

            if (isHovered) {
                return;
            }

            const currentVideo =
                getCurrentVideo();


            /*
             * VIDEO
             *
             * The video plays automatically.
             * The next slide is triggered only
             * when the video ends.
             */

            if (currentVideo) {

                const playVideo = () => {

                    if (isHovered) {
                        return;
                    }

                    currentVideo
                        .play()
                        .catch(() => {});
                };


                /*
                 * If the video is already ready,
                 * play immediately.
                 */

                if (
                    currentVideo.readyState >= 2
                ) {

                    playVideo();

                } else {

                    currentVideo.addEventListener(
                        "loadeddata",
                        playVideo,
                        { once: true }
                    );
                }


                /*
                 * Move to the next slide
                 * when the video finishes.
                 */

                currentVideo.onended = () => {

                    if (!isHovered) {

                        goToSlide(
                            currentIndex + 1
                        );

                    }

                };

                return;
            }


            /*
             * IMAGE
             *
             * Images remain visible for 5 seconds.
             */

            autoplayTimer = setTimeout(() => {

                if (!isHovered) {

                    goToSlide(
                        currentIndex + 1
                    );

                }

            }, 5000);
        }


        /* =================================================
           GO TO SLIDE
           ================================================= */

        function goToSlide(
            index,
            userInteraction = false
        ) {

            clearAutoplay();


            /*
             * Loop
             */

            if (index < 0) {

                index =
                    slides.length - 1;
            }

            if (index >= slides.length) {

                index = 0;
            }

            currentIndex = index;


            /*
             * Move track
             */

            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;


            /*
             * Update dots
             */

            dots.forEach((dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === currentIndex
                );

            });


            /*
             * Stop videos from previous slides
             */

            stopAllVideos();


            /*
             * Update carousel height
             */

            updateCarouselHeight();


            /*
             * Start autoplay
             */

            scheduleNextSlide();
        }


        /* =================================================
           PREVIOUS
           ================================================= */

        previousButton.addEventListener(
            "click",
            () => {

                goToSlide(
                    currentIndex - 1,
                    true
                );

            }
        );


        /* =================================================
           NEXT
           ================================================= */

        nextButton.addEventListener(
            "click",
            () => {

                goToSlide(
                    currentIndex + 1,
                    true
                );

            }
        );


        /* =================================================
           PAUSE ON HOVER
           ================================================= */

        carousel.addEventListener(
            "mouseenter",
            () => {

                isHovered = true;

                clearAutoplay();

            }
        );


        /* =================================================
           RESUME AFTER HOVER
           ================================================= */

        carousel.addEventListener(
            "mouseleave",
            () => {

                isHovered = false;

                scheduleNextSlide();

            }
        );


        /* =================================================
           WINDOW RESIZE
           ================================================= */

        window.addEventListener(
            "resize",
            () => {

                updateCarouselHeight();

            }
        );


        /* =================================================
           INITIAL STATE
           ================================================= */

        goToSlide(0);

    });

});