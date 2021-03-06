import './home.css';
import React from 'react';
import {Link} from 'react-router-dom';


const Study = () => {
  
  return (
    <div className='study'>
        <div className='in_study'>
          {/* network */}
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>
              네트워크 이론을 담고 있는 정리본 입니다.
              <br/><br/>Layer 5 인 Application layer 부터
              <br/>Layer 3 인 Network layer와 Network layer의 보안,
              <br/>Layer 2 인 DataLink layer를 다룹니다.
              <br/><br/>네트워크를 처음 접했을 당시 정리한 기본이 되는 내용입니다.
            </div>
            <div className='study_end'>
              <Link className='study_see' to ='/study/st_network' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.12.19</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>컴파일러 구조</div>
            <div className='study_content'>
            컴파일러의 구조에 대한 내용입니다.
            <br/><br/>1. Lexical Analysis
            <br/>2. Parsing
            <br/>3. Sementic Analysis
            <br/>4. Optimization
            <br/>5. Code Generation
            <br/>과정을 순차적으로 정리한 자료입니다.
            </div>
            <div className='study_end'>
            <Link className='study_see' to ='/study/st_complier' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.12.20</div>
            </div>
          </div>
        
        {/* data communication */}
          <div className='in_content'>
            <div className='study_title'>데이터 통신</div>
            <div className='study_content'>
            네트워크의 하단 layer에 대해 다룬 정리본 입니다.
            <br/><br/>Layer 1 Physical layer || data 와 signal 사이의 변환 과정을
            <br/>Layer 2 DataLink layer || DLC와 MAC에 대해 집중적으로 다룹니다.
            <br/>Wifi, Bluetooth, Cellular에 대해 소개합니다.
            </div>
            <div className='study_end'>
            <Link className='study_see' to ='/study/st_datacommu' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.12.22</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>운영체제</div>
            <div className='study_content'>
            OS 내부 동작들의 기초 지식 및 동작에 대한 정리본입니다.
            <br/><br/>CPU 동작
            <br/>Memory 접근
            <br/>Cache & File System
            <br/><br/>등의 내용을 정리한 OS 배경 지식입니다.
            </div>
            <div className='study_end'>
            <Link className='study_see' to ='/study/st_os' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.12.25</div>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Study;