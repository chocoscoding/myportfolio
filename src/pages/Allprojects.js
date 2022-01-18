
  // const getProjects = useCallback( async () => {
  //   const userCollection = collection(db, 'projects');
  //   const data = await getDocs(userCollection);
  //   const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   setProjects(response)
  //   console.log(response);
  // }, [])
  // useEffect(() => {
  //   getProjects();

  // },[getProjects])

//   const [projects, setProjects] = useState([]);
// import { collection, getDocs } from 'firebase/firestore';