import Detail from './Detail';
const apartments =  [
        {
          id: 1,
          description: "A cozy 2-bedroom apartment located downtown with a fully equipped kitchen and a balcony.",
          price: 1200,
          picture: "https://picsum.photos/200"
        },
        {
          id: 2,
          description: "Spacious 3-bedroom apartment in a quiet neighborhood, close to public transport and schools.",
          price: 1500,
          picture: "https://picsum.photos/200"
        },
        {
          id: 3,
          description: "Modern 1-bedroom loft with large windows and a beautiful city view, located near restaurants and shops.",
          price: 1000,
          picture: "https://picsum.photos/200"
        },
        {
          id: 4,
          description: "Luxury 4-bedroom penthouse with a private rooftop terrace and high-end appliances.",
          price: 2500,
          picture: "https://picsum.photos/200"
        },
        {
          id: 5,
          description: "Affordable studio apartment perfect for students, within walking distance of the university.",
          price: 800,
          picture: "https://picsum.photos/200"
        },
        {
          id: 6,
          description: "Charming 2-bedroom apartment in a historic building, featuring wooden floors and original architecture.",
          price: 1300,
          picture: "https://picsum.photos/200"
        }
      ]      


const Liste = () => {
    return (
        <div className="home-container">
            <h2>Liste des appartements disponibles</h2>
            <div className="apart-list">
                {apartments.map(apart => (
                    <div key={apart.id} className="apart-item">
                        <img src={apart.picture} alt={apart.price} />
                        <h3>Prix: {apart.price} Ariary</h3>
                        <p>Details: {<Detail />}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Liste;
