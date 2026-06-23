

const Highlights = () => {
    return (
        <section id="highlights">
            <h2>This is {" "}
                <span className="text-blue-500">
                    the BEST BMW drifts </span> You have never seen before...</h2>

            <div className="videos-grid">
                <div className="video-card">
                    <video src="/videos/model1.mp4 " autoPlay muted loop playsInline></video>
                </div>

                <div className="video-card">
                    <video src="/videos/model2.mp4" autoPlay muted loop playsInline></video>
                </div>

                <div className="video-card">
                    <video src="/videos/model3.mp4" autoPlay muted loop playsInline></video>
                </div>

                <div className="video-card">
                    <video src="/videos/model4.mp4" autoPlay muted loop playsInline></video>
                </div>
            </div>
        </section>
    )
}

export default Highlights