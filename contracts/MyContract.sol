// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./interfaces/IScoracle.sol";

contract MyContract {

    // The Deployed Scoracle.sol contract address
    address scoracle_address;

    constructor(address _scoracleAddress) {
        scoracle_address = _scoracleAddress;
    }

    // calcualateMacroScore - The function will (re)calculate a user's score by making a score request to the Scoracle contract
    // The Scoracle contract will then make request to the Chainlink Node where the score request will be fulfilled.
    function calculateMacroScore(
        bytes32 _scoreTypeJobId,
        bytes memory _userSignature
    ) external {
        IScoracle scoracle = IScoracle(scoracle_address);
        scoracle.scoreRequest(msg.sender, _scoreTypeJobId, _userSignature);
    }

    // prequalifyUser - The function reads the user's score from the Scoracl contract's state and will prequalify the user for X depending on their score.
    function prequalifyUser(
        bytes32 _scoreTypeJobId
    ) public view returns (bool prequalified, uint256 score) {

        IScoracle scoracle = IScoracle(scoracle_address);

        // Scoracle's getScore will read an already calculated score from the Scoracle contract's state.
        IScoracle.ScoreData memory scoreData = scoracle.getScore(msg.sender, _scoreTypeJobId);

        prequalified = (scoreData.score > 650) ? true : false;

        return (prequalified, scoreData.score);
    }
}