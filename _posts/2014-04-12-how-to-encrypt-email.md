---
layout: post
title: "Tutorial: How to encrypt your email"
description: "A basic tutorial in email encryption"
tags: [Information, Tutorial, Encryption, Security]
---
{% include JB/setup %}

When used properly, email encryption ensures that nobody unwanted (not the NSA, marketing men, creeps, etc.) can see the content of your emails.

<!--more-->

<div class="image-right-box large"><img src="/images/encryption-in-gmail.jpg" class="image-right">
	An encrypted email received in Gmail. The scrambled text is nonsense to people snooping.
</div>

Hopefully, email encryption will become so widespread that even the likes of Google integrate easy tools and guides into freemail services. This may not happen though, since their business depends on knowing your email content.

Whatever happens, people who care will make a point of learning it, to ensure our data remains ours.

There are many email encryption tutorials online, but none covers everything I think should be covered. Here is my attempt at a good and simple guide.

How to encrypt in simple steps
------------------------------

This guide introduces the basic tools and concepts necessary to email encryption. Most of these steps involve a click of a button. They are just listed here to give a little more explanation.

You can use your current email provider (including Gmail, Hotmail and others) to start encrypting. The instructions here will work, with slight variations, on Mac, Windows and Linux.


The idea behind encryption
--------------------------

The main idea we need to know is that of key pairs. Our software makes two special keys (really just two, long strings of numbers and letters), which together are a mathematically related pair:

<div class="image-right-box large"><img src="/images/pgp-key-pair.png" class="image-right">
	  Sender encrypts message with the public key, the private key let's the recipient decrypt it.<br />&copy; <a href="http://www.correderajorge.es">correderajorge.es</a>
</div>

1) A private key which you need to keep secret on their computer or other device.

2) The public key, which you share with everyone you would like to receive email from. This is usually shared with the whole world on public key sites which anyone can access and search.


When someone sends you an email, their software encrypts the message with your public key. You then decrypt it with your private key. You are the only person who can decrypt messages encrypted with your public key, because only your private key can do it.

This way, as long as your private key stays private, someone can be sure that the message they are sending you can only be decrypted by you.


Software
--------

We will use three programs including [Mozilla Thunderbird](https://www.mozilla.org/thunderbird/), which automatically helps us get the other two.

Thunderbird is [trusted software](https://securityinabox.org/en/thunderbird_main) from the makers of Firefox. It includes a setup tool so getting started is easy. We will use it to connect to our usual email account.

<div class="image-right-box large">
	<img src="/images/stop-sync.jpg" class="image-right">
	Follow the steps in point 5 to stop Thunderbird downloading all your emails.
</div>

→1) [Download, install and open Thunderbird](https://www.mozilla.org/thunderbird/).

→2) Click "Create a new account" > Email

→3) Assuming you are using your current email address select the skip this and "*use my existing email*" option.

→4) In the Mail Account Setup, enter your email account details. Click "*Continue*" and then the IMAP/POP3 settings appear.

→5) Thunderbird attempts to fetch all your old mail by default. We will switch this off as it slows our setup.

Go to *Manual config* > *Advanced config* > *Synchronization & Storage*

Click on the setting *Synchronize the most recent* and change it to 1 day.


We can now use Thunderbird to send ordinary email.


Setting up our encryption keys
------------------------------

Next, we set up our key pair.

<div class="image-right-box large">
	<img src="/images/my-key.png" class="image-right">
	My public key, as displayed on the mit key server.
</div>

→1) Click "*Tools*" and then "*Add-ons*". 

→2) Type "*Enigmail*" > and then "*Install*" Restart

→3) The OpenPGP Wizard now opens automatically. Click:
"*Yes, I would like the wizard to get me started*"

→4) Next select "*No I will create per-recipient rules*"

→5) On "*Change a few default settings to make OpenPGP work*" select "*Yes*""

→6) For "*New key pair or existing pair?*", select "*New*".

→7) Enter a passphrase to make sure that only you are able to access the key to 

Key Generation now begins automatically and can take a few minutes.

→8) You are then asked if you want to "*Generate revocation certificate*". This certificate will let you invalidate your keys if your private key is lost or stolen. Keep this safe and activate it with PGP Tools if that ever happens.


Ready for privacy
-----------------

From now on, if you want to send an email to someone privately, you will need to get their public key (if they have one) when you get their email address. They should give it to you, or you can search with their email or name on a public key server, like [http://pgp.mit.edu](http://pgp.mit.edu).

You then add the key to your contacts with your *PGP Key Management* tool so that Thunderbird has the necessary information to encrypt with.


The marvellous world of encryption
-----------------------------------

If you have nobody to practice encryption with, find a penpal at [cryptopals.org](http://www.cryptopals.org).

There are other basic but important concepts and tools to learn about this process, like the fact that you can use it to sign messages so people can prove that you sent the message. For simplicity, this guide ends here.

Encryption is a fascinating subject, particularly as related innovations, like Bitcoin and Tor, introduce wonderful possibilities.