export default function TestingState({testState}) {
 
    return (
      <div className="testing">
        <header>
          <h1>Basic Mern Starter Template</h1>
          <hr />
          {testState ? (
            <p>
              API Working {Boolean(testState).toString()}; Test State: {testState}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </header>
      </div>
    );
  }