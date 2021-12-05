async function getAccount() {
                var accounts,account;
                // modal.style.display = "none";
                accounts = await ethereum.request({ method: 'eth_requestAccounts'});
                account = accounts[0];
              //   show = substr(account,5,13). '...';
                // btn.write (account.substring(0,5) + '...' + account.substring(account.length - 5,account.length));
            }