import CollectionManager from '@/components/CollectionManager';

export default function EmbassiesPage() {
  return (
    <CollectionManager
      tableName="embassies"
      title="Embassies Management"
      description="Manage embassies and translation requirements. Changes will reflect instantly on the website."
      fields={[
        { key: 'title_ar', label: 'Embassy Name (Arabic)', type: 'text' },
        { key: 'title_en', label: 'Embassy Name (English)', type: 'text' },
        { key: 'excerpt_ar', label: 'Requirements Summary (Arabic)', type: 'textarea' },
        { key: 'excerpt_en', label: 'Requirements Summary (English)', type: 'textarea' },
        { key: 'flag', label: 'Country Code (e.g., US, UK, DE)', type: 'text' },
      ]}
    />
  );
}
