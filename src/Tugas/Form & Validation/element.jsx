import React from "react";
import { Form, Button } from "react-bootstrap";
import './element.css';

const ShowError = ({errors, text}) => {
        return (errors ? 
            <div>
                <p className="errorText">{text}</p>
            </div>
         : '')
}

export default class Element extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false,
        invalidForm: false
    }

    handleSubmit = event => {
        event.preventDefault();
        const {nama, jurusan, gender, alamat, member} = this.state;

        if(nama === '' || jurusan === '' || gender === '' || alamat === '') {
            this.setState({
                invalidForm: true
            })
        } else {
            alert(` Nama : ${nama} \n Jurusan : ${jurusan} \n Jenis Kelamin : ${gender} \n Alamat : ${alamat} \n Member : ${member ? 'Yes' : 'No'}`)
        }
    }

    showErrorMsg(param) {
        switch (param) {
            case 'formNama':
                return 'Nama harus Diisi';
            case 'formJurusan':
                return 'Jurusan harus Diisi';
            case 'formGender':
                return 'Gender harus Diisi';
            case 'formAlamat':
                return 'Alamat harus Diisi';
            default:
                break;
        }
    }

    render () {
        return (
            <div style={{margin: "100px 500px"}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        Nama: <input type="text" name="nama" 
                        className={this.state.invalidForm && !this.state.nama ? 'invalidForm' : ''}
                        onChange={ e => this.setState({nama: e.target.value}, () => console.log(this.state))}
                        />
                        <ShowError text={this.showErrorMsg('formNama')} errors={this.state.invalidForm && !this.state.nama} />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Jurusan: <Form.Select name="jurusan" 
                        className={this.state.invalidForm && !this.state.jurusan ? 'invalidForm' : ''}
                        onChange={ e => this.setState({jurusan: e.target.value}, () => console.log(this.state))}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Kimia">Kimia</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Agroteknologi">Agroteknologi</option>
                        </Form.Select>
                        <ShowError text={this.showErrorMsg('formJurusan')} errors={(this.state.invalidForm && !this.state.jurusan)} />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Jenis Kelamin: 
                        <input type="radio" name="gender" value="Pria" 
                        onChange={ e => this.setState({gender: e.target.value}, () => console.log(this.state))}
                        /> Pria
                        <input type="radio" name="gender" value="Wanita" 
                        onChange={ e => this.setState({gender: e.target.value}, () => console.log(this.state))}
                        /> Wanita
                        <ShowError text={this.showErrorMsg('formGender')} errors={(this.state.invalidForm && !this.state.gender)} />

                    </Form.Label>
                    <br />
                    <Form.Label>
                        Alamat:
                        <textarea name="alamat" cols="30" rows="10"
                        className={this.state.invalidForm && !this.state.alamat ? 'invalidForm' : ''}
                        onChange={ e => this.setState({alamat: e.target.value}, () => console.log(this.state))}
                        />
                        <ShowError text={this.showErrorMsg('formAlamat')} errors={(this.state.invalidForm && !this.state.alamat)} />

                    </Form.Label>
                    <br />
                    <Form.Label>
                        Member:
                        <input type="checkbox" name="member" checked={this.state.member} 
                        onChange={ e => this.setState({member: e.target.checked}, () => console.log(this.state))}
                        />
                    </Form.Label>
                    <br />
                    <br />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}