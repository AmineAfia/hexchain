pragma solidity ^0.4.2;
pragma experimental ABIEncoderV2;

contract Health {
    struct Patient {
        uint id;
        string name;
        uint age;
        string nationality;
        string city;
        string country;
        uint balance;
        uint[] diseases;
        // mapping(string => Disease) diseases;
    }

    struct Disease {
        uint id;
        string name;
        string symptoms;
        string doctor;
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
    mapping (uint => Disease) public diseases;
    uint public patientsCount;
    uint public doctorsCount;
    uint public diseasesCount;

    // Constructor
    function Health() public {
        patientsCount = 0;
        doctorsCount = 0;
        
        addPatient("Ben", 17, "Canada", "Toronto", "Canada");
        addPatient("Adam", 22, "France", "Paris", "Germany");
        addDoctor("Philip", "Hospital 1");
    }
    // addPateint
    // test data: "Amine", 20, "Morocco", "Karlsruhe", "Germany"
    function addPatient(string _name, uint _age, string _nationality, string _city, string _country) public {
        patientsCount++;
        uint[] memory _diseases;
        patients[patientsCount] = Patient(patientsCount, _name, _age,
                                          _nationality, _city, _country, 0, _diseases);
    }

    // addDisease
    // TODO: Please solidity implement string arrays!! Now, I need to do a dirty hack on the client now
    // test data: "Ben", "Cancer", "symptom 1", "Philip"
    // TODO: fix the vanishing array issue
    function addDiseaseToPatient(string _patientName, string _name, string _symptoms, string _doctor) public {
        // get patient ID
        uint _patientId = getPatientIdByName(_patientName);
        // get the index of the last disease and increment it
        diseasesCount++;
        Disease memory d = Disease(diseasesCount, _name, _symptoms, _doctor, now, 15500000000000000);
        diseases[diseasesCount] = d;
        patients[_patientId].diseases.push(diseasesCount);
    }
    
    //addDoctor
    // test data: "Philip", "hospital 100"
    function addDoctor(string _name, string _hospital) {
        doctorsCount++;
        doctors[doctorsCount] = Doctor(doctorsCount, _name, _hospital);
    }

    // editPatient
    // test data: 1, "Ben", 90, "UK", "London", "UK", 10
    function editPatient(uint _id, string _name, uint _age, string _nationality, string _city, string _country, uint _balance) public returns(bool) {
        uint[] memory _diseases = getPatientDiseasesIds(_id);
        patients[_id] = Patient(_id, _name, _age, _nationality, _city, _country, _balance, _diseases);
        return true;
    }

    // test data: 1
    function getPatientDiseasesIds(uint _id) returns(uint[]) {
        uint[] _diseasesArray = patients[_id].diseases;
        return _diseasesArray;
    }

    // test data: "Ben"
    function getPatientIdByName(string _name) public returns(uint) {
        for (uint i = 1; i <= patientsCount; i++) {
            if (keccak256(patients[i].name) == keccak256(_name)) {
                return i;
            }
        }
        return 0;
    }

    // test data: "Philip"
    function getDoctorIdByName(string _name) public returns(uint) {
        for (uint j = 0; j <= doctorsCount; j++) {
            if (keccak256(doctors[j].name) == keccak256(_name)) {
                return j;
            }
        }
        return 0;
    }

    // lookupPatient
    function getPatientByName(string _name) public returns(string[3]) {
        for (uint x = 0; x <= patientsCount; x++) {
            if (keccak256(patients[x].name) == keccak256(_name)) {
                return [patients[x].name, uintToString(patients[x].age), patients[x].country];
            }
        }
    }
    
    function uintToString(uint v) public constant returns (string str) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = byte(48 + remainder);
        }
        bytes memory s = new bytes(i + 1);
        for (uint j = 0; j <= i; j++) {
            s[j] = reversed[i - j];
        }
        str = string(s);
    }
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
