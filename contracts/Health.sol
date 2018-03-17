pragma solidity ^0.4.2;
// pragma experimental ABIEncoderV2;

contract Health {
    struct Patient {
        uint id;
        string name;
        uint age;
        string nationality;
        string city;
        string country;
        uint balance;
        mapping(string => Disease) diseases;
    }

    struct Disease {
        string name;
        string[] symptoms;
        uint doctore;
        uint date;
        uint price;
    }

    struct Doctor {
        uint id;
        string name;
        string hospital;
    }
    
    mapping (uint => Doctor) public doctors;
    mapping (uint => Patient) public patients;
    uint public patientsCount;

    // Constructor
    function Health() public {
        patientsCount = 0;
        addPatient("Ben", 17, "Canada", "Toronto", "Canada");
        addPatient("Adam", 22, "France", "Paris", "Germany");
    }
    // addPateint
    function addPatient(string _name, uint _age, string _nationality, string _city, string _country) public {
        patientsCount++;
        patients[patientsCount] = Patient(patientsCount, _name, _age,
                                          _nationality, _city, _country, 0);
    }
    
    // modifyPatient
}

// contract BuyRecord is EditRecord {
//     // Query patiences WIP
//     function getPatientsPrice(string _disease) private view returns (uint) {
//         uint buyingPrice;
//         for (uint x = 1; x <= patientsCount; x++) {
//             buyingPrice += patients[x].diseases[_disease].price;
//         }
//         return buyingPrice;
//     }

//     Buy Patiences data
//     function buyPatientsData(string _disease) public returns (uint price, uint numberOfPatients, string[] diseaseCountries, string[] diseaseCities) {
//         for (uint i = 0; i <= patientsCount; i++) {
//             if (patients[i].diseases[_disease].name != "") {
//                 price += patients[i].diseases[_disease].price;
//                 numberOfPatients += 1;
//                 diseaseCountries.push(patients[i].country);
//                 diseaseCities.push(patients[i].city);
//             }
//         }
//     }
// }
