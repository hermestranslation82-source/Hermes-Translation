import CollectionManager from '@/components/CollectionManager';

export default function ServicesPage() {
  return (
    <CollectionManager
      tableName="services"
      title="Services Management"
      description="Manage all translation services. Changes will reflect instantly on the website."
      fields={[
        { key: 'title_ar', label: 'Title (Arabic)', type: 'text' },
        { key: 'title_en', label: 'Title (English)', type: 'text' },
        { key: 'excerpt_ar', label: 'Excerpt (Arabic)', type: 'textarea' },
        { key: 'excerpt_en', label: 'Excerpt (English)', type: 'textarea' },
        { key: 'icon', label: 'Lucide Icon Name (e.g., Landmark, Gavel)', type: 'text' },
      ]}
    />
  );
}
