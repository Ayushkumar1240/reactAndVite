import Item from "./Item";
const PackingList = () => {
  return (
      <section>
        <h1>Ayush Packing List</h1>
        <ul>
          <Item isPacked={true} name="space suite" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
  );
};

export default PackingList;
