let Navbar = {
  render: async () => {
    let view = /*html*/ `
             <nav role="navigation" aria-label="main navigation">
                    <div id="navbar-brand" class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            activity tracker
                        </a>
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
            </nav>
        `;
    return view;
  },
  after_render: async () => {}
};

export default Navbar;
