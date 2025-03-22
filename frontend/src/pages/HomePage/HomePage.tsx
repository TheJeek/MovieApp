import styles from './home-page.module.scss';
import {useEffect, useState} from "react";
import {TestObject} from "../../database/TestObject.ts";
import {TestService} from "../../service/TestService.ts";
export default function HomePage() {
    const [testObjects, setTestObjects] = useState<TestObject[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<number | string>('');

    const fetchAllTestObjects = async () => {
        setError(null);
        try {
            const fetchedObjects = await TestService.getAll();
            setTestObjects(fetchedObjects as TestObject[]);
        } catch (err) {
            setError('Error fetching data');
        }
    };

    const createTestObject = async () => {
        if (!name || !value) {
            setError('Please fill in both name and value.');
            return;
        }

        const newTestObject: TestObject = {
            objectId: 0,
            objectName: name,
            objectValue: typeof value === 'string' ? parseInt(value, 10) : value,
        };

        setError(null);

        try {
            const createdObject = await TestService.createTestObject(newTestObject);
            setTestObjects([...testObjects, createdObject]);
            setName('');
            setValue('');
        } catch (err) {
            setError('Error creating TestObject');
        }
    };

    useEffect(() => {
        fetchAllTestObjects();
    }, []);

    return (
        <div className={styles.homepage}>
            <header className={styles.header}>
                <h1>Welcome to the Media Critic App</h1>
                <p>:)</p>
            </header>

            <section className={styles.testObjectsSection}>
                <h2>Test Objects</h2>

                {/* Button to fetch all TestObjects */}
                <button onClick={fetchAllTestObjects}>
                    Fetch All TestObjects
                </button>

                {/* Display any errors */}
                {error && <p className={styles.error}>{error}</p>}

                {/* Display the fetched TestObjects */}
                <table className={styles.testObjectsTable}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {testObjects.map((obj) => (
                        <tr key={obj.objectId}>
                            <td>{obj.objectId}</td>
                            <td>{obj.objectName}</td>
                            <td>{obj.objectValue}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h3>Create New TestObject</h3>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={createTestObject}>
                        Create TestObject
                    </button>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2025 Movie App :)</p>
            </footer>
        </div>
    );
}
