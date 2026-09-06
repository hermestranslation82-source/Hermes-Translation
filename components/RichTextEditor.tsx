'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, 
  Heading1, Heading2, Heading3, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Quote, Link as LinkIcon, Undo, Redo,
  Image as ImageIcon, Youtube as YoutubeIcon
} from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'], alignments: ['left', 'center', 'right', 'justify'] }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true, HTMLAttributes: { class: 'rounded-xl max-w-full h-auto border shadow-sm my-4' } }),
      Youtube.configure({ inline: false, HTMLAttributes: { class: 'w-full aspect-video rounded-xl my-4' } }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none min-h-[300px] max-w-none text-slate-800',
      },
    },
  });

  if (!editor) return null;

  const ToolbarButton = ({ onClick, isActive, disabled, children, title }: any) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded-md transition-colors flex items-center justify-center ${isActive ? 'bg-brand-red text-white' : 'text-slate-600 hover:bg-slate-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col focus-within:ring-2 focus-within:ring-brand-red/50 focus-within:border-brand-red transition-all">
      {/* Toolbar like Word */}
      <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-wrap gap-1 items-center sticky top-0 z-10">
        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo"><Undo className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo"><Redo className="w-4 h-4" /></ToolbarButton>
        </div>

        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })} title="SEO H1 (Main Title)"><Heading1 className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} title="SEO H2 (Sub Title)"><Heading2 className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} title="SEO H3 (Section)"><Heading3 className="w-4 h-4" /></ToolbarButton>
        </div>

        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Bold"><Bold className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Italic"><Italic className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} title="Underline"><UnderlineIcon className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')} title="Strikethrough"><Strikethrough className="w-4 h-4" /></ToolbarButton>
        </div>

        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left"><AlignLeft className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center"><AlignCenter className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right"><AlignRight className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} isActive={editor.isActive({ textAlign: 'justify' })} title="Justify"><AlignJustify className="w-4 h-4" /></ToolbarButton>
        </div>

        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List"><List className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Numbered List"><ListOrdered className="w-4 h-4" /></ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Quote"><Quote className="w-4 h-4" /></ToolbarButton>
        </div>

        <div className="flex gap-1 border-r border-slate-300 pr-2 mr-1">
          <ToolbarButton onClick={() => {
            const url = window.prompt('URL:');
            if (url) editor.chain().focus().setLink({ href: url }).run();
            else if (url === '') editor.chain().focus().unsetLink().run();
          }} isActive={editor.isActive('link')} title="Insert Link"><LinkIcon className="w-4 h-4" /></ToolbarButton>
          
          <ToolbarButton onClick={() => {
            const url = window.prompt('Image URL (https://...):');
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }} title="Insert Image"><ImageIcon className="w-4 h-4" /></ToolbarButton>

          <ToolbarButton onClick={() => {
            const url = window.prompt('YouTube Video URL:');
            if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
          }} title="Embed YouTube Video"><YoutubeIcon className="w-4 h-4 text-brand-red" /></ToolbarButton>
        </div>
      </div>

      <div className="flex-1 bg-[#f8fafc] cursor-text" onClick={() => editor.chain().focus().run()}>
        {/* The actual editor area (like the white paper in Word) */}
        <div className="max-w-4xl mx-auto bg-white my-6 shadow-sm border border-slate-200 min-h-[500px] p-8 md:p-12 focus-within:shadow-md transition-shadow">
           <EditorContent editor={editor} />
        </div>
      </div>
      
      {/* Status bar like Word */}
      <div className="bg-slate-100 border-t border-slate-300 p-2 text-xs text-slate-500 flex justify-between">
        <span>Word Count: {editor.storage.characterCount?.words() || editor.getText().split(/\s+/).filter(Boolean).length}</span>
        <span>SEO Optimized Engine Active</span>
      </div>
    </div>
  );
}
