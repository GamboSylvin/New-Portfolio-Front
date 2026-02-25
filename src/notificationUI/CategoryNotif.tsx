
function CategoryNotif({ category }: { category: string }) {
    return(
        <div className="w-fit text-xs z-10 absolute top-4 right-4 category-notif bg-gray-100  text-gray-500 px-4 py-1.5 rounded-full">
            {category}
        </div>
    )
}

export default CategoryNotif;