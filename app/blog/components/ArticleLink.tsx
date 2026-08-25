import { BlogArticle } from "@/lib/types"
import Image from "next/image";
import Link from "next/link";

interface Props {
    article: BlogArticle;
    isLast: boolean;
}

const ArticleLink = ({ article, isLast }: Props) => {
    return (
    <Link
        href={`/blog/${article.category.slug}/${article.slug}`}
        className="
            w-full relative group
            px-8 py-8
            flex gap-8
            md:hover:bg-white/5 md:hover:gap-12 duration-200"
    >
        <div className="
            w-20 h-full relative
            rounded-2xl overflow-hidden
            md:group-hover:scale-110 duration-200"
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
            flex flex-col gap-4"
        >
            <div className="w-full flex justify-between">
                <h3 className="text-my-lg text-brandwhite font-semibold">
                    {article.title}
                </h3>
                <span className="text-myf-md text-gray-200">
                    {article.date}
                </span>
            </div>
            <div className="w-full h-[1px] bg-linear-to-r from-gray-600 to-gray-600/10" />
            <p className="text-myf-md text-gray-200">
                {article.description}
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

export default ArticleLink