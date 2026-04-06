

function Contact() {
    return (
        <section id="contact" className="bg-radial from-blue-950 to-gray-900 text-white py-12 px-12 text-center min-h-80">
            <h2 className="text-3xl font-bold mb-4">Ready to build something amazing?</h2>
            <p className="mb-10 text-xs md:text-base">I'm currently available for freelance work and open to new opportunities. Let's discuss how I can help bring your ideas to life!</p>
            <div className="flex justify-center gap-6">
                <a href="mailto:your-email@example.com" className="bg-gray-200 text-gray-800 text-xs md:text-base font-medium px-4 py-2 rounded cursor-pointer hover:bg-gray-50 transition duration-300">
                    start a conversation
                </a>
                <a href="https://www.linkedin.com/in/your-profile" className="bg-transparent border text-xs md:text-base border-gray-200 text-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-100 hover:text-gray-800 transition duration-300">
                    download my CV
                </a>
            </div>
        </section>
    );
}

export default Contact;