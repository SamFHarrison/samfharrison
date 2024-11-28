import personSchema from "./personSchema.json";

function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}

export default PersonSchema;
