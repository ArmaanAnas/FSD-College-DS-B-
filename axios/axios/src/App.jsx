const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setData(response.data))
            .catch((err) => console.error(err));
    }, []);
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
export default App;