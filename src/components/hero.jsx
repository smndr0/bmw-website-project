
const hero = () => {
    return (
        <section id="hero">
            <div>
                <h1>Ultimate Driving Machine</h1>
            </div>

            <video src="/videos/bmwm4.mp4" autoPlay muted playsInline loop></video>

            <button style={{ margin: '20px 0' }}>Buy</button>

            <p>Experience the thrill of driving the BMW M4.</p>

        </section>
    )
}

export default hero