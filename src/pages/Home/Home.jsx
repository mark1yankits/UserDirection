import { useState, useEffect } from 'react';

// css
import "./HomeStyle.css"
function Home(){
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [cityFilter, setCityFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchUsers = async ()=>{
            setLoading(true);
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            }
            catch(err){
                console.error('Error fetch users', err);
            }finally {
                setLoading(false); //Hight indecator reload
            }
        };
        fetchUsers();
    }, []);

    const filterUser = users.filter((user)=>{
        return(
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()));
    
    });
    //filter by city
    const filterByCity = cityFilter
    ?  filterUser.filter(user => user.address.city === cityFilter):
    filterUser

    //sort a-z

    const sortUsers = (users)=>{
        return users.sort((a,b)=>{
            if(sortOrder === 'asc'){
                return a.name.localeCompare(b.name); // A-Z
            }else{
                return b.name.localeCompare(a.name); // Z-A
            }
        })
    }
    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const displayedUsers = sortUsers(filterByCity);
    return (
        <div className="container">
            <h1>User List</h1>
        <div className="controls">
            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setCityFilter(e.target.value)}>
                <option value="">Filter by city</option>
                <option value="Gwenborough">Gwenborough</option>
                <option value="Wisokyburgh">Wisokyburgh</option>
                {/* Another city */}
            </select>
            <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</button>
        </div>
        {loading ? <p>Loading...</p> : null}
        <div className="user-list">
            {displayedUsers.map(user => (
                <div className="user-card" key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                    <p>City: {user.address.city}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Home;
