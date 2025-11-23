const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




// Policy content
const policyContent = {
    terms: `
        <h3>Terms & Conditions</h3>
        <p><strong>Scope:</strong> By accessing and using SPARTA LOGISTICS services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms govern your use of our logistics, transportation, and supply chain services.</p>
        
        <h3> Pricing and Payment</h3>
        <p> All price quotations are valid for 30 days from the date of issue, unless otherwise specified.
        </p>
        
        
        <h3>5. Liability and Insurance</h3>
        <p><strong> Limited Liability:</strong> SPARTA LOGISTICS liability for loss or damage to goods is limited to ₹50 per kg or the declared value of goods, whichever is lower.</p>
        <p><strong> Insurance:</strong> Basic insurance coverage is included in all shipments. Additional insurance can be purchased for high-value goods.</p>
        <p><strong> Exclusions:</strong> We are not liable for delays or damages caused by:</p>
        <ul>
            <li>Force Majeure events (natural disasters, strikes, wars)</li>
            <li>Incorrect documentation provided by customer</li>
            <li>Customs delays or regulatory issues</li>
            <li>Improper packaging by customer</li>
        </ul>
        
        <h3>6. Prohibited Items</h3>
        <p>The following items are strictly prohibited and will not be transported:</p>
        <ul>
            <li>Illegal drugs and narcotics</li>
            <li>Weapons, ammunition, explosives</li>
            <li>Hazardous materials without proper declaration</li>
            <li>Perishable goods without special arrangements</li>
            <li>Cash, jewelry, and precious stones</li>
            <li>Live animals without prior approval</li>
        </ul>
    `,
    
    privacy: `
        <h3>Privacy Policy</h3>
        <p><strong>Information Collection:</strong> We collect personal information that you provide to us when you use our services, including but not limited to name, email address, phone number, and shipping details.</p>
        
        <h3>Data Usage</h3>
        <p>We use your personal information to provide and improve our services, communicate with you, and comply with legal obligations. Your data is protected with industry-standard security measures.</p>
        
        <h3>Information Sharing</h3>
        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business.</p>
        
        <h3>Cookies</h3>
        <p>Our website uses cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>
        
        <h3>Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.</p>
    `,
    
    refund: `
        <h3>Refund & Cancellation Policy</h3>
        <p><strong>Cancellation Policy:</strong> You may cancel your shipment booking up to 2 hours before the scheduled pickup time without any charges. Cancellations made after this period may be subject to cancellation fees.</p>
        
        <h3>Refund Eligibility</h3>
        <p>Refunds are processed in the following cases:</p>
        <ul>
            <li>Service not provided as promised</li>
            <li>Double payment or overcharging</li>
            <li>Cancellation within the allowed timeframe</li>
        </ul>
        
        <h3>Refund Process</h3>
        <p>Refund requests will be processed within 7-10 business days. The amount will be credited to the original payment method used during the transaction.</p>
        
        <h3>Non-Refundable Services</h3>
        <p>The following services are non-refundable once initiated:</p>
        <ul>
            <li>Express delivery services</li>
            <li>Custom clearance services</li>
            <li>Special handling charges</li>
        </ul>
        
        <h3>Contact for Refunds</h3>
        <p>For any refund-related queries, please contact our customer support at http://www.spartalogisticsindia.in or call us at 9321547372.</p>
    `
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');
    const policyLinks = document.querySelectorAll('.policy-link');
    
    // Open modal
    policyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const policyType = this.getAttribute('data-type');
            
            // Set modal title based on policy type
            switch(policyType) {
                case 'terms':
                    modalTitle.textContent = 'Terms & Conditions';
                    break;
                case 'privacy':
                    modalTitle.textContent = 'Privacy Policy';
                    break;
                case 'refund':
                    modalTitle.textContent = 'Refund & Cancellation Policy';
                    break;
            }
            
            // Set modal content
            modalContent.innerHTML = policyContent[policyType];
            
            // Show modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});




  document.addEventListener('DOMContentLoaded', function() {
    const serviceLinks = document.querySelectorAll('.service-link');
    
    // Service navigation
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceType = this.getAttribute('data-service');
            
            // Check if we're already on services page
            if (window.location.pathname.includes('services.html') || 
                window.location.pathname === '/services.html') {
                navigateToServiceTab(serviceType);
            } else {
                // Navigate to services page with hash
                window.location.href = '/services.html#' + serviceType;
            }
        });
    });
    
    // Check URL hash on page load
    function checkUrlHash() {
        const hash = window.location.hash.replace('#', '');
        if (hash && ['road', 'air', 'ocean', 'rail'].includes(hash)) {
            setTimeout(() => {
                navigateToServiceTab(hash);
            }, 300);
        }
    }
    
    // Navigate to specific service tab
    function navigateToServiceTab(serviceType) {
        // Find the services container
        const servicesContainer = document.querySelector('.container');
        
        if (servicesContainer) {
            // Scroll to services section
            servicesContainer.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Then activate the corresponding tab after a short delay
            setTimeout(() => {
                activateServiceTab(serviceType);
            }, 500);
        } else {
            // If container not found, just activate the tab
            activateServiceTab(serviceType);
        }
    }
    
    function activateServiceTab(serviceType) {
        // Find tab buttons and contents
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        // Remove active class from all tabs
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Activate the target tab
        const targetBtn = document.querySelector(`.tab-btn[data-tab="${serviceType}"]`);
        const targetContent = document.getElementById(serviceType);
        
        if (targetBtn && targetContent) {
            targetBtn.classList.add('active');
            targetContent.classList.add('active');
            
            // Add highlight animation to the active tab
            targetBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                targetBtn.style.transform = 'scale(1)';
            }, 300);
            
            // Update URL hash without page reload
            window.history.replaceState(null, null, `#${serviceType}`);
        }
    }
    
    // Check URL hash when page loads
    checkUrlHash();
    
    // Also check hash when navigating back/forward
    window.addEventListener('hashchange', checkUrlHash);
});


// Your existing modal functionality remains the same...
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing modal code
});



document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});