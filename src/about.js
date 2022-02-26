export default function About(props) {
    return (
        <main class="contact">
            <section class="presentation" data-title="Contact Us" id="shirt" data-role="card">
                <div class="shirt" role="img">🚀</div>
                <div role="presentation">
                    <h4>Buy a Rocketship!</h4>
                    <p data-hover="Maybe one day we will.">OK so we don't actually sell rockets.</p>
                    <h5>Try on of our world class beverages today.</h5>
                    {false && (<quote>Fly me on a moon trip Mr. Big Time</quote>)}
                    <button role="button" class="card-button">Are you the future?</button>
                </div>
            </section>
            <section class="social-media" data-title="Social">
                <div class="facebook" data-icon="f" data-name="facebook"></div>
                <div class="twitter" data-icon="t" data-name="twitter"></div>
                <div class="instagram" data-icon="i" data-name="instagram"></div>
                <div class="emaillist" data-icon="e" data-name="email"></div>
            </section>
            <section class="location" data-title="Find Us" data-icon="🗺️">
                <div data-copy="📋" data-icon="🗺️" class="location-map">[~~~.~~~]</div>
                <div data-copy="📋" data-icon="️" class="address"> 1011 1147 Quadra St.<br />V8W 2K5<br />Victoria, BC</div>
                <div class="findus"><button role="button">Find Us</button></div>
            </section>
            <section class="details" data-title="Contact Us" data-icon="📧">
                <div data-icon="📧" class="email-address">liquidsnakeeater@gmail.com</div>
                <div data-icon="📞" class="phone-number">(250) 555 5598</div>
                <div data-icon="✉️" class="postal-address">1011 1147 Quadra St.<br />V8W 2K5<br />Victoria, BC</div>
            </section>
            <section class="phone" data-title="Call Us" >
                <div class="ringring" data-icon="📞" data-content="(250) 555 5598"></div>
            </section>
            <section class="map" data-title="Site Map" >
                <div class="home"   ><a href="index.html">Home</a><a href="Store">Store</a><a href="contact.html">Contact</a></div>
                <div class="store"  ><a href="index.html">Home</a><a href="Store">Store</a><a href="contact.html">Contact</a></div>
                <div class="contact"><a href="index.html">Home</a><a href="Store">Store</a><a href="contact.html">Contact</a></div>
            </section>
        </main>
    )
}