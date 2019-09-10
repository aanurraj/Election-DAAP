var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    var electionInstance;
    it("Initilizes with two Candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        });
    });

    it("Initilizes with correct values", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "Contains the correct candidate name");
            assert.equal(candidate[2], 0, "Correct vote counts");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "Contains the correct candidate name");
            assert.equal(candidate[2], 0, "Correct vote counts");
        });
    });
});

