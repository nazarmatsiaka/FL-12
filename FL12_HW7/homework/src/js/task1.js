let login = prompt('Enter email');

if(login !== '' && login) {
    if(login.length > 5) {
        if( login === 'user@gmail.com') {
            let pass = prompt('Enter password');
            if(pass && pass !== '') {
                if( pass === 'UserPass') {
                    if(confirm('Do you want to change your password?')) {
                        if(pass === prompt('Enter old password:')) {
                            let newPass1 = prompt('Enter new password:');
                            if(newPass1 && newPass1 !== '') {
                                if(newPass1.length >= 6) {
                                    let newPass2 = prompt('Enter password again:');
                                    if( newPass1 === newPass2) {
                                        alert('You have successfully changed your password.');
                                    } else {
                                        alert('You wrote the wrong password.');
                                    }
                                }else {
                                    alert('It’s too short password. Sorry.');
                                }
                            } else {
                                alert('Canceled');
                            }
                        } else {
                            alert('Wrong password');
                        }
                    } else {
                        alert('You have failed the change.');
                    }
                } else {
                    alert('Wrong password');
                }
            } else {
                alert('Canceled');
            }
        } else if( login === 'admin@gmail.com') {
            let pass = prompt('Enter password');
            if(pass && pass !== '') {
                if( pass === 'AdminPass') {
                    if(confirm('Do you want to change your password?')) {
                        if(pass === prompt('Enter old password:')) {
                            let newPass1 = prompt('Enter new password:');
                            if(newPass1 && newPass1 !== '') {
                                if(newPass1.length >= 6) {
                                    let newPass2 = prompt('Enter password again:');
                                    if( newPass1 === newPass2) {
                                        alert('You have successfully changed your password.');
                                    } else {
                                        alert('You wrote the wrong password.');
                                    }
                                }else {
                                    alert('It’s too short password. Sorry.');
                                }
                            } else {
                                alert('Canceled');
                            }
                        } else {
                            alert('Wrong password');
                        }
                    } else {
                        alert('You have failed the change.');
                    }
                } else {
                    alert('Wrong password');
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert('I don’t know you');
        }
    } else {
        alert("I don't know any emails having name length less than 5 symbols");
    }
} else {
    alert('Canceled');
}

