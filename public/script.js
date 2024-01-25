//Script.js
/*
async function fetchInstagramPhotos() {
    const container = document.querySelector('.swiper-wrapper');
    try {
        const response = await fetch('/instagram-photos');
        const data = await response.json();

        data.data.forEach(photo => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            const img = document.createElement('img');
            img.src = photo.media_url;
            img.alt = photo.caption || 'Instagram photo';

            slide.appendChild(img);

            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.innerText = photo.caption || '';
            slide.appendChild(caption);

            container.appendChild(slide);
        });

        // Initialize Swiper after the slides are added
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = '<p>Failed to load Instagram photos.</p>';
    }
}

fetchInstagramPhotos();
*/

document.addEventListener("DOMContentLoaded", function () {
    async function fetchInstagramPhotos() {
        const container = document.querySelector('.swiper-wrapper');
        try {
            const response = await fetch('/instagram-photos');
            const data = await response.json();

            data.data.forEach(photo => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = photo.media_url;
                img.alt = photo.caption || 'Instagram photo';

                slide.appendChild(img);

                const caption = document.createElement('div');
                caption.className = 'caption';
                caption.innerText = photo.caption || '';
                slide.appendChild(caption);

                container.appendChild(slide);
            });

            // Initialize Swiper after the slides are added
            new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } catch (error) {
            console.error('Error:', error);
            container.innerHTML = '<p>Failed to load Instagram photos.</p>';
        }
    }

    fetchInstagramPhotos();
});
