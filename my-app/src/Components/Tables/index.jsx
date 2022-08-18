import './index.css';
export default function Tables() {
      const dataFromLocalStorage = (event) => {
            const dataLS = localStorage.getItem('Forms');
            if (dataLS) {
                  console.log(dataLS);
                  return JSON.parse(dataLS);
            } else {
                  return [];
            }
      };

      dataFromLocalStorage();
      const data = dataFromLocalStorage();
      return (
            <div className="flex">
                  <div className="test">
                        {data.map((datas) => (
                              <>
                                    <p key={data}>Nom : {datas.firstName}</p>
                                    <p>Prenom : {datas.lastName}</p>
                                    <p>date de naissance : {datas.birthdate}</p>
                                    <p>
                                          date de commencement :{' '}
                                          {datas.startDate}
                                    </p>
                                    <p> selection : {datas.Select}</p>
                                    <p> street : {datas.Street}</p>
                                    <p> state : {datas.State}</p>
                                    <p> city : {datas.City}</p>
                                    <p> zipCode : {datas.ZipCode}</p>
                              </>
                        ))}
                  </div>
            </div>
      );
}
