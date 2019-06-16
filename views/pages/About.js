let About = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> About </h1>
                <p>This website allows you to monitor your activities of any kind.</p>
                <p>Data is exclusively stored on your devices.</p>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;