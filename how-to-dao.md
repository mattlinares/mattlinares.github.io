---
layout: post
title: How to DAO
tagline: Trialling DAOs for effective organisations
---


<section class="right-col" id="projects">
  <h3>How to try a DAO in your org and why you may want to</h3>
  <p>DAOs can help organisations manage core functions such as voting on funding and processing payments. </p>
  <p>Here’s a basic guide to setting up the tools to create and use a DAO, as an administrator or a user. We also encourage discussion of the pros, cons and political implications of DAOs.</p>
  <!-- <p style="color: #ff9c9c;">↠ This guide will form the basis of a workshop at 3.30-5.30pm on 17th Dec 2022 at <a href="https://houseofannetta.org/">House Of Annetta</a> by Brick Lane. We will introduce digital wallets and using DAOs. <a href="mailto:matthewlinares@protonmail.com">Please email us to RSVP</a>.</p> -->
  <p>This guide will be updated over time.</p>

  <h3 id="hidden_overview" class="hidden_div_title" onclick="click_show_hidden_div(this)">Get a cryptocurrency wallet</h3>

  <div id="hidden_overview_div">
    <ul>
      <li>Download the Metamask wallet, which is a browser extension for Firefox or Chrome: <a href="metamask.io/">metamask.io</a></li>
      <li>Follow the setup instructions in the extension.</li>
      <li>Backup your private key securely. We'll only use this wallet for testing for now but you may use it in future to manage tokens, voting rights, or other valuable activity.</li>
    </ul>
  </div>

  <h3 id="hidden_create" class="hidden_div_title" onclick="click_show_hidden_div(this)">Get started with a DAO</h3>

  <div id="hidden_create_div" class="hidden_div">

  <h4>Choose a DAO platform</h4>

  <p>There are various options, even amongst Ethereum-based systems, such as <a href="https://daohaus.club/">DAOHaus</a> and <a href="https://colony.io/">Colony</a>.

  <p>We’ll use DAOHaus for our trial. Here's <a href="https://www.dodao.io/dao-frameworks/daohaus">an overview of the platform.</a></p>


<p>↠ If you want to create the DAO using a testnet (i.e. just using test, free cryptocurrency) then we can use the Gnosis chain.</p>

<p>↠ <a href="https://faucet.gnosischain.com/">Get some free Gnosis chain tokens from a faucet</a>. Faucets give tokens to let people test things out, like we're doing here.</p>

<p>Switch Metamask to Gnosis chain network.</p>




<!-- If you want to create a DAO on the Ethereum mainnet with real money:

With DAOHaus - on Gnosis (xDai) chain (which is cheaper).

↠ <a href="https://daohaus.club/docs/users/networks/">Connect to Gnosis chain network</a> with Metamask wallet.

↠ Get some DAI on main net

↠ Convert that to xDai -->

<p>↠ Then <a href="https://app.daohaus.club/summon">create the DAO using the summon command</a>.</p>


<p>The settings you use cannot be changed after you’ve created the DAO, so make sure you think them through. Key settings include voting periods, grace period and proposal costs. You may want to set these low if you’re just trialing the DAO. e.g. a short voting period will let you set up and finalise a vote in under an hour when you’re learning but you’ll obviously want longer if you’re setting up a real DAO where people may need days or longer to cast their vote.</p>

<p>Similarly, proposal costs should be cheap for testing but the real thing so people only make proposals when they really need to. e.g. 1000000000000000 wei is a good low price</p>

<p><a href="https://admin.daohaus.club/#/molochv3/0x64/0xbdfd72ae0aa14aeb2246d620cc2b03261afb782a">Here’s a tester DAO I made earlier</a>. We can use this for free and without worrying we'll break something.</p>

<p>↠ You’ll need to get some wrapped Gnosis chain tokens to vote in the dapp, so <a href="https://app.uniswap.org/#/swap">get some from this <a href="https://faucet.gnosischain.com/">faucet</a>.</p>



  <h3 id="hidden_members" class="hidden_div_title" onclick="click_show_hidden_div(this)">Add DAO members</h3>

  <div id="hidden_members_div" class="hidden_div">

<p><a href="https://admin.daohaus.club/#/molochv3/0x64/0xbdfd72ae0aa14aeb2246d620cc2b03261afb782a">Here’s a test members page.</a></p>

<p>Either apply to join yourself or apply on someone’s behalf by making a request for tokens (which allow you to vote i.e. be a member).</p>

<p>If you are running this in a workshop, assign existing members to set up and manage votes for new members. Make sure you don’t miss the deadlines, you may only have a few minutes to act during each phase before the proposal expires!</p>

<p>↠ Click “New Proposal +”, create the proposal, then vote on it, allow the grace period to pass, then process it to enact it.</p>

</div>

<h3 id="hidden_funding" class="hidden_div_title" onclick="click_show_hidden_div(this)">Make a funding proposal</h3>

<div id="hidden_funding_div" class="hidden_div">

<p>A funding proposal lets members vote to spend DAO’s money</p>

<p>Here‘s a <a href="https://app.daohaus.club/dao/0x5/0x3dbe03fe8a713e9e703fe4005bc747f6abb97d08/proposals">dummy proposal</a>.</p>

<p>↠ To create a new one, select "New Proposal +", then search for "Funding Proposal" (you might need to select "The Classics" in the dropdown).</p>

<p>↠ Add the name of the proposal e.g. "Pay Alex for their time", add the Recipient’s Ethereum address in "Recipient", and add the amount of Eth (in Weth) in the "Payment requested" area. The other fields are not necessary for now.</p>

<p>↠ Submit the proposal request and sign the transaction. Then wait for the voting period to begin, make sure enough members vote to reach quorum, wait for the grace period to pass, then process the result if necessary e.g. pay the person.</p>

</div>