// app/causes/page.js

import Cabanner from "../Component/Causes/Cabanner";



const Causes = async () => {
    // Fetch data on each request
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        cache: 'force-cache', // 'no-store' ensures data is fetched fresh on each request
        headers: {
            'Cache-Control': 'public, max-age=86400', // Cache control if needed
        },

        
    });
    
    const datas = await response.json();

    return (
        <div>
            <Cabanner datas={datas} />
        </div>
    );
};

export default Causes;
