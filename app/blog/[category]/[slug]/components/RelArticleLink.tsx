import { BlogArticle } from "@/lib/types"
import Image from "next/image";
import Link from "next/link";

interface Props {
    article: BlogArticle;
    isLast: boolean;
}

const RelArticleLink = ({ article, isLast }: Props) => {
    return (
    <Link
        href={`/blog/${article.slug}`}
        className="
            w-full relative group
            px-4 py-4
            flex items-center gap-4 md:gap-8
            md:hover:bg-white/5 duration-200"
    >
        <div className="
            w-16 h-16 relative
            md:w-20 md:h-20
            rounded-2xl overflow-hidden
            duration-200"
        >
            <Image
                src={article.coverSrc}
                fill
                sizes="100%"
                className="w-full h-full object-cover"
                alt="Miniatura de artículo"
            />
        </div>
        <div className="
            flex-1 h-full
            flex flex-col gap-2 md:gap-4"
        >
            <div className="w-full flex justify-between">
                <h3 className="text-myf-md text-brandwhite font-semibold">
                    {article.title}
                </h3>
                {/* <span className="text-sm text-gray-200">
                    {article.date}
                </span> */}
            </div>
            <div className="w-full h-[1px] bg-linear-to-r from-gray-600 to-gray-600/10" />
            <p className="text-my-sm text-gray-200">
                {article.date}
            </p>
        </div>
        {!isLast && (
            <div className="
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-full h-[1px] bg-gray-400"
            />
        )}
    </Link>
    )
}

export default RelArticleLink