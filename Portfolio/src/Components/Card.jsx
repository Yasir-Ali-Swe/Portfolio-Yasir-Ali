import { FiArrowRight } from 'react-icons/fi';

function ServiceCard({ icon: Icon, title, description, tags }) {
    return (
        <div className="bg-cardBackground rounded-lg p-6 shadow-sm max-w-sm hover:border-2 hover:border-[#0ef]">
            <div className="mb-4">
                {Icon}
            </div>
            <h3 className="text-xl text-selected font-bold mb-2">{title}</h3>
            <p className="text-textColor mb-4">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6 cursor-pointer">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
            </div>
            <div className="flex justify-center">
                <a href="#" className="inline-flex items-center text-textColor font-medium">
                    Learn More
                    <FiArrowRight className="ml-2" size={16} />
                </a>
            </div>
        </div>
    );
}

export default ServiceCard;
