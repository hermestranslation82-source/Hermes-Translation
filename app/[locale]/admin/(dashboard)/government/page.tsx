import CollectionManager from '@/components/CollectionManager';

export default function GovernmentBodiesPage() {
  return (
    <CollectionManager
      tableName="government_bodies"
      title="Government Bodies"
      description="Manage government bodies and their specific attestation requirements."
      fields={[
        { key: 'title_ar', label: 'Body Name (Arabic)', type: 'text' },
        { key: 'title_en', label: 'Body Name (English)', type: 'text' },
        { key: 'excerpt_ar', label: 'Description (Arabic)', type: 'textarea' },
        { key: 'excerpt_en', label: 'Description (English)', type: 'textarea' },
      ]}
    />
  );
}
