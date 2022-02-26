export default function Store(props) {
    return (
            <main className="store">
                <article className="slideshow">
                    <legend className="showcase" id="showcase-carousel">
                        <span tabIndex="0" className='showcase-button' data-showcase="enjoy" href="#enjoy"></span>
                        <span tabIndex="1" className='showcase-button' data-showcase="experience" href="#experience"></span>
                        <span tabIndex="2" className='showcase-button' data-showcase="hat" href="#hat"></span>
                        <span tabIndex="3" className='showcase-button' data-showcase="sunglasses" href="#sunglasses"></span>
                        <span tabIndex="4" className='showcase-button' data-showcase="pants" href="#pants"></span>
                        <span tabIndex="5" className='showcase-button' data-showcase="shirt" href="#shirt"></span>
                        <span tabIndex="6" className='showcase-button' data-showcase="rocket" href="#rocket"></span>
                    </legend>
                    <div className="showcase">
                        <section className="store" id="enjoy" data-role="card">
                            <div className="cheers" role="img">🥡</div>
                            <div role="presentation">
                                <h4>Enjoy</h4>
                                <p>Find out about our tasting room for food and drinks.</p>
                                <div className="quote">More than anything - everything.</div>
                                <button role="button" className="card-button"><p>Explore</p></button>
                            </div>
                        </section>
                        <section className="store" id="experience" data-role="card">
                            <div className="experience" role="img">🍻</div>
                            <div role="presentation">
                                <h4>Experience</h4>
                                <p>It's better than good.</p>
                                <div className="quote">You'll never know if you don't try.</div>
                                <button role="button" className="card-button"><p>Get good</p></button>
                            </div>
                        </section>
                        <section className="store" id="hat" data-role="card">
                            <div className="hat" role="img">🧢</div>
                            <div role="presentation">
                                <h4>Swag</h4>
                                <p>More swagger than an international sporting event.</p>
                                <div className="quote">So fit your can't quite.</div>
                                <button role="button" className="card-button"><p>Gimme that.</p></button>
                            </div>
                        </section>
                        <section className="store" id="sunglasses" data-role="card">
                            <div className="glasses" role="img">🕶️</div>
                            <div role="presentation">
                                <h4>Look</h4>
                                <p>Stare without people noticing.</p>
                                <div className="quote">Dress up your eyeballs with this one simple trick.</div>
                                <button role="button" className="card-button"><p>It hurts so good.</p></button>
                            </div>
                        </section>
                        <section className="store" id="pants" data-role="card">
                            <div className="pants" role="img">🩳</div>
                            <div role="presentation">
                                <h4>Cloths</h4>
                                <p>Cloths that looks good on you.</p>
                                <div className="quote">Better on your floor.</div>
                                <button role="button" className="card-button"><p>Dress to express.</p></button>
                            </div>
                        </section>
                        <section className="store" id="shirt" data-role="card">
                            <div className="shirt" role="img">👕</div>
                            <div role="presentation">
                                <h4>Shirt</h4>
                                <p>Holy fuck is that a shirt?</p>
                                <div className="quote">'Borrow' this after your next late night sleep over.</div>
                                <button role="button" className="card-button"><p>I want one!</p></button>
                            </div>
                        </section>
                        <section className="store" id="rocket" data-role="card">
                            <div className="shirt" role="img">🚀</div>
                            <div role="presentation">
                                <h4><b>Boom!</b></h4>
                                <p>Is that a rocket in your pocket?</p>
                                <div className="quote">Take me to the moon Mr. Big Time Rocketman</div>
                                <button role="button" className="card-button"><p>Lets go!</p></button>
                            </div>
                        </section>
                    </div>
                </article>
                <article className="marketplace">
                    <h1>Marketplace</h1>
                    <section className="purchasable">
                        <div className="beer regular" id="showcase-enjoy">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🍺</div>
                            <div className="title">Beer</div>
                            <div className="description">This is a beer. Drink it you will like it.</div>
                            <div className="stats">1 ABV</div>
                            <div className="price">$10.00</div>
                            <div className="quantity">1 Litre</div>
                            <div className="weight">1 lb</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer regular" id="showcase-sunglasses">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🍺</div>
                            <div className="title">Beer</div>
                            <div className="description">This is a beer. Drink it you will like it.</div>
                            <div className="stats">1 ABV</div>
                            <div className="price">$10.00</div>
                            <div className="quantity">1 Litre</div>
                            <div className="weight">1 lb</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer strong" id="showcase-hat">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🍺</div>
                            <div className="title">Strong Beer</div>
                            <div className="description">This is a beer. Drink it you will like it.</div>
                            <div className="stats">1 ABV</div>
                            <div className="price">$10.00</div>
                            <div className="quantity">1 Litre</div>
                            <div className="weight">1 lb</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer light" id="showcase-shirt">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🍺</div>
                            <div className="title">Light Beer</div>
                            <div className="description">This is a beer. Drink it you will like it.</div>
                            <div className="stats">1 ABV</div>
                            <div className="price">$10.00</div>
                            <div className="quantity">1 Litre</div>
                            <div className="weight">1 lb</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer cider" id="showcase-experience">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🍺</div>
                            <div className="title">Cider</div>
                            <div className="description">This is a cider. Drink it you will like it.</div>
                            <div className="stats">1 ABV</div>
                            <div className="price">$10.00</div>
                            <div className="quantity">1 Litre</div>
                            <div className="weight">1 lb</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer bear" id="showcase-pants">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🧸</div>
                            <div className="title">Bear</div>
                            <div className="description">This is a bear. Drink you will it.</div>
                            <div className="stats">Wont leave</div>
                            <div className="price">Will pay</div>
                            <div className="quantity">1</div>
                            <div className="weight">Lots</div>
                            <div className="alt">SEND HELP</div>
                            <div className="add">+</div>
                        </div>
                        <div className="beer bear" id="showcase-rocket">
                            <h1 className="showcase-title"></h1>
                            <div className="img" role="img">🧸</div>
                            <div className="title">Bear</div>
                            <div className="description">This is a bear. Drink you will it.</div>
                            <div className="stats">Wont leave</div>
                            <div className="price">Will pay</div>
                            <div className="quantity">1</div>
                            <div className="weight">Lots</div>
                            <div className="alt">SEND HELP</div>
                            <div className="add">+</div>
                        </div>
                        <div className="cart">🛒</div>
                    </section>
                </article>
            </main>
    )
}