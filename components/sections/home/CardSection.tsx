import { motion } from "framer-motion";

const cards = [
    {
        title: "We Collaborate with Ambitious Businesses of All Sizes",
        description: `At BeyondNull, we work with driven businesses, regardless of their size or industry. 
        As a trusted provider of digital solutions, we help local business owners, schools, and hospitals 
        establish their online presence. From creating custom websites and apps to managing social media and 
        digital marketing, we deliver end-to-end solutions that drive growth and success. 
        
        Our expertise spans across industries, including education, healthcare, retail, and small businesses. 
        By leveraging our comprehensive digital marketing strategies, we position our clients as leaders in 
        their domains.`,
    },
    {
        title: "Grow Your Company's Online Presence with Creative Website Design",
        description: `Are you looking for the best website designers in Mumbai to enhance your business’s online presence? 
        Ideamagix specializes in creating visually stunning and technologically advanced websites that leave a lasting impact. 
        
        As a premier website design company, we collaborate closely with you to understand your unique design 
        preferences and business processes. Our services ensure your brand has a fresh, modern identity that leads 
        to increased engagement and success.`,
    },
    {
        title: "Find the Perfect Web Development Services for Your Business",
        description: `We create stunning websites and efficient web applications that blend aesthetics and functionality 
        to drive your business forward. As businesses go online, India's e-commerce industry is predicted to grow by 84% 
        in the next 4 years. 
        
        Are you planning to take your business online? Partner with us for a standout website and seamless online 
        presence. Additional services include Ecommerce Website Development, Enterprise WordPress Development, 
        Laravel Development, and React.js Development.`,
    },
    {
        title: "Top-Rated Mobile App Development Company | Professional Android & iOS Developers",
        description: `Discover why BeyondNull is renowned as the best mobile app development company . Our expert developers specialize in creating high-performance Android and iOS suited to your business needs. Leveraging cutting-edge technology and innovative design, we deliver user-centric mobile solutions that drive engagement and growth. Partner with BeyondNull for custom app development that sets your business apart.  Other Services: 
Android App Development
iOS App Development
Hybrid App Development
PWA App Development
Flutter App Development
React Native App Development`,
    }
];

export default function CardSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
