import "./strings.sol";

pragma solidity ^0.4.2;
pragma experimental ABIEncoderV2;

contract Health {
    using strings for *;
    
    struct Patient {
        uint id;
        string name;
        uint age;
        string nationality;
        string city;
        string country;
        uint balance;
        uint[5] diseases;
        uint patientDiseasesCount;
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

        addPatient("Ben", 17, "UK", "London", "UK");
        addDiseaseToPatient("Ben", "Cancer", "symptom 1", "Philip");
        addPatient("Adam", 22, "France", "Paris", "Germany");
        addDoctor("Philip", "Hospital 1");
    }
    // addPateint
    // test data: "Amine", 20, "Morocco", "Karlsruhe", "Germany"
    function addPatient(string _name, uint _age, string _nationality, string _city, string _country) public {
        patientsCount++;
        uint[5] memory _diseases;
        patients[patientsCount] = Patient(patientsCount, _name, _age,
                                          _nationality, _city, _country, 0, _diseases, 0);
    }

    // test data: "Cancer", "symptom 1", "Dr. Philip"
    function addDisease(string _name, string _symptoms, string _doctor) {
        diseasesCount++;
        Disease memory d = Disease(diseasesCount, _name, _symptoms, _doctor, now, 15500000000000000);
        diseases[diseasesCount] = d;
    }

    // addDisease
    // TODO: Please solidity implement string arrays!! Now, I need to do a dirty hack on the client now
    // test data: "Ben", "Cancer", "symptom 1", "Philip"
    function addDiseaseToPatient(string _patientName, string _name, string _symptoms, string _doctor) public returns(bool) {
        addDisease(_name, _symptoms, _doctor);
        uint _patientId = getPatientIdByName(_patientName);
        patients[_patientId].patientDiseasesCount++;
        patients[_patientId].diseases[patients[_patientId].patientDiseasesCount] = diseasesCount;
        return true;
    }

    // function editDisease(string _patientName, string _diseaseName, string _syptom) {
    //     uint _patientId = getPatientIdByName(_patientName);
    //     for (uint l = 0; l <= patients[_patientId].patientDiseasesCount; l++) {
    //         if (keccak256(diseases[patients[_patientId].diseases[l]].name) == keccak256(_patientName)) {
    //             diseases[patients[_patientId].diseases[l]].syptoms.push(_syptom);
    //         }
    //     }
    //     patients[_patientId].
    // }
    
    function getPatientDiseases(uint _id) public returns(uint[5]) {
        return patients[_id].diseases;
    }
    
    //addDoctor
    // test data: "Philip", "hospital 100"
    function addDoctor(string _name, string _hospital) {
        doctorsCount++;
        doctors[doctorsCount] = Doctor(doctorsCount, _name, _hospital);
    }

    // editPatient
    // test data: 1, "Ben", 27, "UK", "London", "UK", 10
    function editPatient(uint _id, string _name, uint _age, string _nationality, string _city, string _country, uint _balance) public returns(bool) {
        uint[5] memory _diseases = getPatientDiseasesIds(_id);
        uint _pCount = patients[_id].patientDiseasesCount;
        patients[_id] = Patient(_id, _name, _age, _nationality, _city, _country, _balance, _diseases, _pCount);
        return true;
    }

    // test data: 1
    function getPatientDiseasesIds(uint _id) returns(uint[5]) {
        uint[5] _diseasesArray = patients[_id].diseases;
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

    // lookupPatient
    function getPatientByName(string _name) public returns(string) {
        for (uint x = 0; x <= patientsCount; x++) {
            if (keccak256(patients[x].name) == keccak256(_name)) {
                string memory _age = uintToString(patients[x].age);
                string memory s = patients[x].name.toSlice()
                                  .concat("   |   ".toSlice()).toSlice()
                                  .concat(patients[x].country.toSlice());
                //s = s.toSlice().concat(_age.toSlice());
                //s = s.toSlice().concat("-".toSlice());
                //s = s.toSlice().concat(_age.toSlice());
                //s = s.toSlice().concat("*".toSlice());
                return s;
            }
        }
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

    // getdataToBuy
    function getDataToBuy(string _disease, string _country) public returns(uint[10]) {
        uint[10] memory numberOfSelectedPatients;
        uint cnt;

        for ( uint k = 0; k <= patientsCount; k++) {
            if (keccak256(patients[k].country) == keccak256(_country)) {
                    for (uint z = 0; z <= patients[k].patientDiseasesCount; z++) {
                        uint tmp = patients[k].diseases[z];
                        if (keccak256(diseases[tmp].name) == keccak256(_disease)) {
                            cnt++;
                            numberOfSelectedPatients[cnt] = k;
                        }
                    }
            }
        }
        return numberOfSelectedPatients;
    }

    function getPatientBalanceByName(string _name) public returns(uint) {
        uint tmpId = getPatientIdByName(_name);
        return patients[tmpId].balance;
    }

    function buyData(uint _id, uint price) public payable {
        patients[_id].balance += price;
    }
    
    function getContractBalance() public returns(uint) {
        return this.balance;
    }
    
}