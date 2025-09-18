interface Block {
  type: string;
  level?: number;
  format?: string;
  url?: string;
  children?: { text: string; bold?: boolean; italic?: boolean; type?: string; url?: string }[];
}

interface BlocksRendererProps {
  content: Block[];
}

export default function BlogContent({ content }: BlocksRendererProps) {
  const renderBlock = (block: Block, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {block.children?.map((child, childIndex: number) => {
              if (child.type === 'link') {
                return (
                  <a key={childIndex} href={child.url} className="text-[#0AA9E5] hover:underline">
                    {child.children?.[0]?.text || child.text}
                  </a>
                );
              }
              if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
              if (child.italic) return <em key={childIndex}>{child.text}</em>;
              return child.text;
            })}
          </p>
        );
      
      case 'heading':
        const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-3xl font-bold mb-6 text-[#0B131E]',
          2: 'text-2xl font-semibold mb-4 text-[#0B131E]',
          3: 'text-xl font-semibold mb-3 text-[#0B131E]',
          4: 'text-lg font-semibold mb-2 text-[#0B131E]',
          5: 'text-base font-semibold mb-2 text-[#0B131E]',
          6: 'text-sm font-semibold mb-2 text-[#0B131E]'
        };
        
        return (
          <HeadingTag key={index} className={headingClasses[block.level as keyof typeof headingClasses]}>
            {block.children?.map((child: any) => child.text).join('')}
          </HeadingTag>
        );
      
      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        const listClass = block.format === 'ordered' ? 'list-decimal' : 'list-disc';
        
        return (
          <ListTag key={index} className={`${listClass} ml-6 mb-4 space-y-2`}>
            {block.children?.map((item: any, itemIndex: number) => (
              <li key={itemIndex} className="text-gray-700">
                {item.children?.map((child: any) => child.text).join('')}
              </li>
            ))}
          </ListTag>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#0AA9E5] pl-4 my-6 italic text-gray-600">
            {block.children?.map((child: any) => child.text).join('')}
          </blockquote>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose max-w-none">
      {content?.map(renderBlock)}
    </div>
  );
}
