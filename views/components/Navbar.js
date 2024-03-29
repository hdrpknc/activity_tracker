let Navbar = {
  render: async () => {
    let view = /*html*/ `
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div id="navbar-brand has-text-centered" class="navbar-brand">
                        <h3>
                            activity tracker
                        </h3>
                    </div>
                    <div id="navbar-items" aria-expanded="false">
                        <div >
                            <a class="navbar-item" href="/activity_tracker/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/activity_tracker/#/about">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    return view;
  },
  after_render: async () => {}
};

export default Navbar;
