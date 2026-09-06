import CollectionManager from '@/components/CollectionManager';

export default function GuidesPage() {
  return (
    <CollectionManager
      tableName="guides"
      title="Document Guides"
      description="Manage guides for different document types (Birth Certificates, Marriage, etc)."
      fields={[
        { key: 'title_ar', label: 'Guide Title (Arabic)', type: 'text' },
        { key: 'title_en', label: 'Guide Title (English)', type: 'text' },
        { key: 'excerpt_ar', label: 'Description (Arabic)', type: 'textarea' },
        { key: 'excerpt_en', label: 'Description (English)', type: 'textarea' },
      ]}
    />
  );
}
