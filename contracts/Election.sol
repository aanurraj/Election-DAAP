pragma solidity ^0.5.0;

contract Election{

    // Defining Structure of Candidate in Election
    struct Candidate{
        uint id;
        string name;
        uint voteCode;
    }

    // Storing and Fetching Candidates
    mapping(uint => Candidate) public candidates;

    // Saving Candidate Count to fetech data from map using loop (Cant iterate or determine size of mapping)
    uint public candidatesCount;

    constructor() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}