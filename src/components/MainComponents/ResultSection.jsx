import MediaCards from "./cards/MediaCards";

export default function ResultSection({ items }) {
  return (
    <section className="result-section">
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <MediaCards item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
