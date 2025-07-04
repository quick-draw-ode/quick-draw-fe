import React from 'react';
import { MediumButton } from '../../global/components/Buttons';
import styled from 'styled-components';
import categories from '../global/categories';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
import loadingGif from '../../global/images/loading.gif';

const { success, light } = color;
const { medium } = fontsize;

const Wrapper = styled.div`
  .button-group {
    display: flex;

    button {
      flex-grow: 1;
      width: 0;
    }

    button + button {
      margin-left: 5px;
    }

    .loading {
      height: 58px;
    }
  }
`;

const Result = ({ onClick, onRefresh, category, eq, predictions, loading }) => {
  return (
    <Wrapper>
      <div className="button-group">
        {loading ? (
          <img src={loadingGif} alt="loading" className="loading" />
        ) : (
          <MediumButton type="button" onClick={onClick}>
            제출
          </MediumButton>
        )}
        <MediumButton type="button" onClick={onRefresh}>
          다음
        </MediumButton>
      </div>
      {predictions && predictions.length > 0 && (
        <StyledPredictionBox
          items={predictions}
          eq={eq}
          category={category[1]}
        />
      )}
    </Wrapper>
  );
};

const PredictionBox = ({ items, eq, category, className }) => {
  return (
    <div className={className}>
      <div className="tit">
        {eq
          ? category + '(을)를 잘 그렸네요!'
          : '잘 모르겠어요. 혹시 그린 것이 다음 중에 있나요?'}
      </div>
      {!eq && (
        <div className="prediction">
          {items.map(item => (
            <span key={item[0] + '_' + item[1]}>
              {categories[item[0]]}({Math.round(item[1] * 1000) / 10}%)
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const StyledPredictionBox = styled(PredictionBox)`
  background: ${success};
  font-size: ${medium};
  color: ${light};
  padding: 10px 20px;
  text-align: center;
  margin-top: 10px;
  border-radius: 3px;

  .tit {
    margin-bottom: 5px;
  }

  .prediction {
    span + span {
      margin-left: 5px;
    }
  }
`;

export default React.memo(Result);
