import supabase from "../config/supabaseClient"; //importing from the client file 
import { useEffect, useState } from "react";

//components
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('ticket')
        .select();

      if (error) {
        setFetchError('Could not fetch the smoothies');
        setSmoothies([]);
        console.log(error);
      } else {
        setSmoothies(data || []);
        setFetchError(null);
      }

      setLoading(false);
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="page home">
      {loading && <p>Loading...</p>}
      {fetchError && <p>{fetchError}</p>}
        <div className="smoothies">
          <div class="bg-red-800">This div</div>
          <div> DIV2</div>
          {/* order by buttons */}
        <div className="smoothie-grid">
        {smoothies.map(smoothie => (
            <SmoothieCard key ={smoothie.id} smoothie={smoothie} />
          ))}
        </div>
        </div>
    </div>
  );
};

export default Home;
