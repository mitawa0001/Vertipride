import styled from "styled-components";

export const TabsStyle = styled.div`

  margin: auto;
  .tabs {
    &__list {
      width: 100%;
    padding-left: 0px;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    background: #4f8b1c;
    color: #fff;
    }
    &__item {
      position: relative;
      display: inline-block;
      text-transform: Capitalize;
      padding: 15px 60px;
      border-right:solid 3px;  
      text-align: center;
      width:300px;
      &:after {
        content: "";
       
        bottom: 0;
        left: 0;
        height: 4px;
        width: 0;
        background: #fff;
        transition: 0.3s;
        color: #7cd1ff;
      }
      &.active:after {
        width: 100%;
        
      }
      &:hover {
        cursor: pointer;
       
      }
      &__active{
        background: #79c146;
      }
    }
    &__content-wrapper {
      position: relative;
    }
    &__actve{
      color: #7cd1ff;
    }
    &__content {
  
      display: none;
      &.active {
        display: block;
      }
    }
  }
`;
