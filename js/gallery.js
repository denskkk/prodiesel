// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const gallerySections = document.querySelectorAll('.gallery-section');
    
    // Filter button click handler
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery sections
            gallerySections.forEach(section => {
                const sectionId = section.getAttribute('id');
                
                if (filter === 'all') {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 10);
                } else if (sectionId === filter) {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                }
            });
            
            // Smooth scroll to filtered content
            if (filter !== 'all') {
                setTimeout(() => {
                    const section = document.getElementById(filter);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        });
    });
    
    // Add transition styles to sections
    gallerySections.forEach(section => {
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    // Gallery item click handler - open image in modal
    const galleryItems = document.querySelectorAll('.gallery-item:not(.gallery-item-video)');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalImageCaption = document.getElementById('modalImageCaption');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img')?.src;
            const title = this.querySelector('.gallery-info h4')?.textContent;
            const description = this.querySelector('.gallery-info p')?.textContent;
            
            if (imgSrc) {
                modalImage.src = imgSrc;
                modalImageCaption.innerHTML = `<strong>${title || ''}</strong><br>${description || ''}`;
                imageModal.classList.add('active');
            }
        });
    });
    
    // Prevent video items from opening modal
    const videoItems = document.querySelectorAll('.gallery-item-video');
    videoItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Allow video controls to work
            if (!e.target.matches('video')) {
                e.stopPropagation();
            }
        });
    });
});

// Add smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
